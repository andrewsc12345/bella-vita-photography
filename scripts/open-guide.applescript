on run
  set guidePath to (POSIX path of (path to home folder)) & "Documents/Bella Vita Gallery Guide.html"
  do shell script "open " & quoted form of guidePath
end run
