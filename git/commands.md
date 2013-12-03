## Configure the global settings
git config --global user.name “Emanual Jade”

git config --global user.email email@gmail.com”

## Initialize an empty repository

git init 

## See the status of the current branch
git status

git status -s

## See the commits you’ve made
git log

git log --all --graph --oneline

git log --pretty=oneline

git log --pretty=oneline --max-count=2

git log --pretty=oneline --since='5 minutes ago'

git log --pretty=oneline --until='5 minutes ago'

git log --pretty=oneline --author=<your name>

git log --pretty=oneline --all

git log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short

git log v2.5.. Makefile fs/ (finds commits since v2.5 which touch the Makefile or any file under fs)

git log -p (ask git log to show patches)

git log --stat (show you which files have changed in that commit and how many lines were added and removed from each)

gitk

gitk --all

gitx

git describe  (shows the number of commits after an annotated tag)



## Stage the files in your branch
git add . 

git add FILENAME 

git add file1 file2 file3

git add DIRECTORY/

git add FILENAME DIRECTORY/ FILENAME DIRECTORY/

## Remove Files from The Staging Area
git rm (kicks the file off the stage entirely, so that it's not included in the next commit snapshot, thereby effectively deleting it.)

git rm file (will remove the file from the staging area entirely and also off your disk (the working directory))

git rm --cached (Removes from staging area but leave the file in the working directory)

## Make a Commit
git commit

git commit -a -m “A message about the commit”

git commit -am “A message about the commit”

git commit --amend (commit changes into the previous commit)

git commit --amend -C HEAD (use the message from the previous commit. Don’t open editor)

## Resetting Commits
git reset - clears the staging area. It keeps the changes.

git reset --hard   (This changes our files back to how they were at the last commit)

git reset --hard HEAD  (puts the contents of HEAD into the working directory. Scraps all your recent changes and reverts to the commit you specify. In this case we revert to HEAD)

git reset --soft 3r4jkhh45 (leaves your working directory changes in tact and your staged files in tact. It moves HEAD to whatever hash we reference)

git checkout --something.html (change the version of the file in the working directory back to the version that’s in the staging area.)

git checkout HEAD something.html (changes something.html to the state of the last commit. You can use git treeish with this feature)

git revert HEAD (This will create a new commit which undoes the change in HEAD. You will be given a chance to edit the commit message for the new commit.)

git revert HEAD^ (You can also revert an earlier change, for example, the next-to-last:)


## See the differences between things
git diff default.css (difference between current working directory and the last commit)

git diff (shows the difference between the version in the staging area and the working directory)

git diff --cached default.css (difference between staging area and most recent commit)

git diff HEAD defualt.css (difference between working directory and any given commit)

git diff --stat (will give us a summary of changes)

git diff master..branch (will produce the diff between the tips of the two branches)

git dif master...branch (If you'd prefer to find the diff from their common ancestor to tip of branch, you can use three dots instead of two)

git diff branch (see how your current working directory differs from the state of the project in another branch)

git diff HEAD -- ./lib (limit the comparison to a specific file or subdirectory by adding a path limiter:)


## Stashing files 
git stash

git stash apply

git stash save “added var something”

git stash list

git stash clear

git stash apply stash@{1}

## Rebasing
git rebase feature

git rebase --continue

git rebase --abort


## Ignore Certain Files
vim .gitignore

.DS_Store (ignore make mac os 10 files)

*.log (Ignore log  files)

!errors.log (Do not ignore errors.log)

## See what branches exist
git branch

## Create a branch
git branch pricing

## Delete a branch
git branch -d pricing (his command ensures that the changes in the experimental branch are already in the current branch.)

git branch -D crazy-idea (If you develop on a branch crazy-idea, then regret it, you can always delete the branch with)

## Create a branch and switch to it automatically
git checkout -b newBranchName

## Switch to another branch
git checkout pricing

## Merge you changes in
git checkout master

git merge pricing

# Roll a file back from staging area. 
(if you have staged a file and not committed. Then you kept editing that file. Now you want to forget about those changes and revert to the staged file)

git checkout -- something.html

# Roll a file back from HEAD. 
(if you have staged a file and not committed. Then you kept editing that file. Now you want to forget about those changes and revert to the file as it exists in HEAD. You could use any git treeish instead of head to roll to that version of the file as well)

git checkout HEAD something.html

## Tag a commit
git tag (shows the existing tags)

git show v0.5 (shows the info about that commit the tag points to)

git tag v0.5

git tag -a v0.5

git tag -a v0.5 -m ‘This is our halfway release’

git tag stable-1 1b2e1d63ff

git tag -a stable-1 1b2e1d63ff

git describe (shows something like this v0.5-5-gad8ab25. Shows the tag and how many commits. 5 in this case. g means it’s a git project. Then the first numbers of the sha1 hash.

## Git Treeishes
Sha-1 Hash - a2nrb5c

Branch or Remote Name - coolFeature

HEAD (points to latest commit on checked out branch)

Date Spec - coolFeature@{4 days ago}

Ordingal Spec - coolFeature@{3} (third most recent commit on that branch)

Caret Parent - HEAD^ (modifies a reference to a commit. Use when it’s a merge commit)

Tilde Parent - HEAD~2 (points to the grandparent of a given commit)

## Interactive Adding
git add -i

status - tells us what is staged and unstaged

update - select the file number to stage

revert - select the number to remove changes from staging area

add untracked - start tracking a file so it can be added to the staging area

patch - stage partial files - the hunks

diff - shows the difference between the staged vs the unstaged 

# REMOTE REPOSITORIES

## Show remote repositories
git remote

git remote -v (This shows the repositories and the url for each one)

## Add a pointer to a remote repository
git remote add origin git@github.com:aburges/myProject.git

## Remove a Remote
git remote rm origin

## Rename a Remote
git remote rename pb paul (renames pb to paul)

## Push to the remote repository
git push origin master (pushes master branch changes to the remote repo origin)

## Show branches 
git branch -a

## Clone a Remote Repository
git clone git@github.com:myname/myProject.git

## Bring in remote changes and merge locally then push back to remote
git fetch origin

git merge origin/master

git push origin master

## Automatically fetch remote results and merge into master
git pull origin master