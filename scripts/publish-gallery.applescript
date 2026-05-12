on run
  try
    set sourceFolder to choose folder with prompt "Select the folder containing the photos for the new client gallery:"
    set folderPath to POSIX path of sourceFolder
    
    set clientNameMsg to "What is the client's name?" & return & return & "(This is shown on the gallery card)"
    set clientNameResult to display dialog clientNameMsg with title "Publish Client Gallery" default answer "" buttons {"Cancel", "Continue"} default button "Continue"
    set clientName to text returned of clientNameResult
    if clientName is "" then
      display dialog "Client name can't be empty." buttons {"OK"} default button "OK" with icon stop
      return
    end if
    
    set passwordMsg to "Set the gallery password:" & return & return & "(Keep it simple - clients will need to type it. Lowercase works best.)"
    set passwordResult to display dialog passwordMsg with title "Publish Client Gallery" default answer "" buttons {"Cancel", "Continue"} default button "Continue"
    set passwordValue to text returned of passwordResult
    if passwordValue is "" then
      display dialog "Password can't be empty." buttons {"OK"} default button "OK" with icon stop
      return
    end if
    
    set sessionTypeOptions to {"Senior Portraits", "Wedding", "Family Session", "Engagement", "Maternity", "Newborn", "Couples Session", "Headshots", "Other"}
    set sessionTypeResult to choose from list sessionTypeOptions with title "Publish Client Gallery" with prompt "What type of session is this?" default items {"Family Session"}
    if sessionTypeResult is false then return
    set sessionType to item 1 of sessionTypeResult
    
    set slug to do shell script "echo " & quoted form of clientName & " | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-//;s/-$//'"
    
    set confirmMessage to "Ready to publish:" & return & return & "Client: " & clientName & return & "URL slug: " & slug & return & "Password: " & passwordValue & return & "Session type: " & sessionType & return & "Photos from: " & folderPath & return & return & "This will take about 1-2 minutes. The gallery will go live automatically when done."
    
    set confirmResult to display dialog confirmMessage with title "Publish Client Gallery" buttons {"Cancel", "Publish"} default button "Publish"
    if button returned of confirmResult is "Cancel" then return
    
    set projectDir to (POSIX path of (path to home folder)) & "Downloads/bella-vita-astro"
    set nodePath to "/opt/homebrew/bin/node"
    
    set shellCommand to "export PATH=/opt/homebrew/bin:/usr/bin:/bin:$PATH && cd " & quoted form of projectDir & " && git pull --quiet 2>&1 && mkdir -p public/clients/" & slug & " && cp " & quoted form of folderPath & "*.jpg public/clients/" & slug & "/ 2>/dev/null; cp " & quoted form of folderPath & "*.JPG public/clients/" & slug & "/ 2>/dev/null; cp " & quoted form of folderPath & "*.jpeg public/clients/" & slug & "/ 2>/dev/null; cp " & quoted form of folderPath & "*.png public/clients/" & slug & "/ 2>/dev/null; photoCount=$(ls public/clients/" & slug & "/ | wc -l | tr -d ' ') && " & nodePath & " scripts/add-gallery.cjs " & quoted form of slug & " " & quoted form of clientName & " " & quoted form of passwordValue & " " & quoted form of sessionType & " && git add public/clients/" & slug & " src/components/app/data.jsx && git commit -m " & quoted form of (clientName & " gallery (" & sessionType & ")") & " --quiet && git push 2>&1 && echo \"DONE:$photoCount\""
    
    set commandResult to do shell script shellCommand
    
    set photoCount to "?"
    if commandResult contains "DONE:" then
      set AppleScript's text item delimiters to "DONE:"
      set photoCount to last text item of commandResult
      set AppleScript's text item delimiters to ""
    end if
    
    set successMessage to "Gallery published successfully!" & return & return & "Client: " & clientName & return & "Photos: " & photoCount & return & "Password: " & passwordValue & return & return & "The site is deploying now. Your gallery will be live at bellavitabyrebecca.com in 1-3 minutes." & return & return & "Don't forget to share the password with your client!"
    
    set successResult to display dialog successMessage with title "Publish Client Gallery" buttons {"View Site", "Done"} default button "Done"
    if button returned of successResult is "View Site" then
      do shell script "open https://bellavitabyrebecca.com"
    end if
    
  on error errorMessage number errorNumber
    if errorNumber is -128 then return
    set errorDetails to "Something went wrong:" & return & return & errorMessage & return & return & "Try again, or contact Chris if it keeps failing."
    display dialog errorDetails buttons {"OK"} default button "OK" with icon stop with title "Publish Client Gallery"
  end try
end run
