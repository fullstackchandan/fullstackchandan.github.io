## Before you attempt to push to remote, make sure you’ve executed these commands:

- git init for initializing a local repository
- git add . to add all your files that the local repository
- git commit -m ‘commit message’ to save the changes you made to those files
- To push the main repo, you first have to add the remote server to Git by running git remote add origin <url>.
- To confirm the remote has been added, run git remote -v:
- To finally push the repo, run git push -u origin <branch-name>
(“main” is the name of that branch for me). It could be master or Main for you. 
- Initially, it was “master”, so I ran git branch -M main to change it.
