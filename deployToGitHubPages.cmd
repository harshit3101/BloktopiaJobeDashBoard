rmdir /S /Q docs & mkdir docs
xcopy src docs\ /E
git add .
git commit -m "Complied filed and deploy to github pages"
git push