What is Version Control?
Version Control is a system that allows you to revisit various versions of a file or set of files by recording changes. 

What is cloning in Git?
By cloning the file, you have copied all versions of all files for a project. 

What is the command to track and stage files?
git add <filename>
or
git add . / git add *
(for all files)

What is the command to take a snapshot of your changed files?
get commit

commit the changes and record what you did within the commit message:

$ git commit -m “made change x,y,z”
 to the HEAD.

Committing All Changes
$ git commit -a
*This command commits a snapshot of all modifications to tracked files in the working directory.


What is the command to send your changed files to Github?
get push

Pushing Changes
Next, you would push changes to a remote repository. We will discuss remote repositories in more depth in the next section. For now, we will look at a general overview of pushing changes to remotes.

Example:

$ git push origin master
*This command pushes changes from the local “master” branch to the remote repository named “origin”.

*For cloned repositories, Git will automatically give the name “origin” to the server from which you cloned and the name “master” to your local repository. However, these names can be changed by the user.
