@echo off
REM SchoolVision AI - Project Setup Script
REM This script initializes the git repository and sets up the project

echo ===================================
echo SchoolVision AI Project Setup
echo ===================================
echo.

REM Navigate to project directory
cd /d d:\dev2\SchoolVisionAISite

REM Initialize Git repository
echo Initializing Git repository...
git init

REM Add all files
echo Adding files to Git...
git add .

REM Create initial commit
echo Creating initial commit...
git commit -m "Initial commit: SchoolVision AI platform with 9 AI-enhanced services including remote attendance and proctoring"

REM Add remote repository (user needs to create this on GitHub first)
echo.
echo Please create a repository on GitHub named 'schoolvision-ai-site' under the 'dbbuilder' account
echo Then press any key to continue...
pause >nul

REM Add remote
echo Adding remote repository...
git remote add origin https://github.com/dbbuilder/schoolvision-ai-site.git

REM Set main branch
git branch -M main

REM Push to remote
echo Pushing to GitHub...
git push -u origin main

echo.
echo ===================================
echo Git repository setup complete!
echo ===================================
echo.
echo Next steps:
echo 1. Run the web scraper: cd src\scraper ^&^& dotnet run
echo 2. Set up development environment
echo 3. Configure Azure resources
echo.
pause