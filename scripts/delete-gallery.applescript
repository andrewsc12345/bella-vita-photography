on run
  try
    set projectDir to (POSIX path of (path to home folder)) & "Downloads/bella-vita-astro"
    set nodePath to "/opt/homebrew/bin/node"
    
    do shell script "export PATH=/opt/homebrew/bin:/usr/bin:/bin:$PATH && cd " & quoted form of projectDir & " && git pull --quiet 2>&1"
    
    set rawList to do shell script "cd " & quoted form of projectDir & " && " & nodePath & " scripts/list-galleries.cjs"
    
    if rawList is "" then
      display dialog "There are no galleries to delete." buttons {"OK"} default button "OK" with title "Delete Gallery"
      return
    end if
    
    set galleryLines to paragraphs of rawList
    set displayList to {}
    set slugList to {}
    set nameList to {}
    set photoCountList to {}
    
    repeat with lineItem in galleryLines
      if length of (lineItem as string) > 0 then
        set AppleScript's text item delimiters to "|"
        set parts to text items of (lineItem as string)
        set AppleScript's text item delimiters to ""
        
        if (count of parts) is 5 then
          set theSlug to item 1 of parts
          set theName to item 2 of parts
          set theType to item 3 of parts
          set theDate to item 4 of parts
          set thePhotoCount to item 5 of parts
          
          set displayItem to theName & "   (" & theType & " - " & thePhotoCount & " photos - " & theDate & ")"
          set end of displayList to displayItem
          set end of slugList to theSlug
          set end of nameList to theName
          set end of photoCountList to thePhotoCount
        end if
      end if
    end repeat
    
    if (count of displayList) is 0 then
      display dialog "There are no galleries to delete." buttons {"OK"} default button "OK" with title "Delete Gallery"
      return
    end if
    
    set chosen to choose from list displayList with title "Delete Gallery" with prompt "Which gallery do you want to delete?" OK button name "Continue" cancel button name "Cancel"
    if chosen is false then return
    
    set chosenDisplay to item 1 of chosen
    set chosenIndex to 0
    repeat with i from 1 to count of displayList
      if (item i of displayList) is chosenDisplay then
        set chosenIndex to i
        exit repeat
      end if
    end repeat
    
    if chosenIndex is 0 then return
    
    set chosenSlug to item chosenIndex of slugList
    set chosenName to item chosenIndex of nameList
    set chosenPhotoCount to item chosenIndex of photoCountList
    
    set confirmMsg to "Are you sure you want to delete this gallery?" & return & return & "Client: " & chosenName & return & "Photos: " & chosenPhotoCount & return & return & "This is permanent. The photos will be removed from the website. (Your original photos in Lightroom are unaffected.)"
    
    set confirmResult to display dialog confirmMsg with title "Delete Gallery" buttons {"Cancel", "Delete"} default button "Cancel" with icon caution
    if button returned of confirmResult is "Cancel" then return
    
    set deleteCommand to "export PATH=/opt/homebrew/bin:/usr/bin:/bin:$PATH && cd " & quoted form of projectDir & " && " & nodePath & " scripts/delete-gallery.cjs " & quoted form of chosenSlug & " && git add -A && git commit -m " & quoted form of ("Delete " & chosenName & " gallery") & " --quiet && git push 2>&1"
    
    do shell script deleteCommand
    
    set successMsg to "Gallery deleted." & return & return & chosenName & "'s gallery has been removed. The site will update in 1-3 minutes."
    display dialog successMsg with title "Delete Gallery" buttons {"OK"} default button "OK"
    
  on error errorMessage number errorNumber
    if errorNumber is -128 then return
    display dialog "Something went wrong:" & return & return & errorMessage buttons {"OK"} default button "OK" with icon stop with title "Delete Gallery"
  end try
end run
