# z-observable
> A conformable, ES6-based syntax for observable objects.

## How to contribute

### step to contribute

* fork: fork your own copy to your account
* clone: use `git clone https://github.com/${username}/z-observable.git` command to download this project.(change username to your own)
* create a new branch: use `git checkout -b ${your-branch-name}` command to create a new branch to do changes.(change your-branch-name to a validate branch to work)
* do some change and commit: after doing some change, use `git add . && git commit -m 'some commit message here'` to commit your changes
* push: use `git push origin ${your-branch-name}` to push your own branch to remote.
* PR: make a pull request at github, to merge your changes into master.

* update: use `git remote add upstream https://github.com/loatheb/z-observable.git` to add another remote, easy to update.

### commit message

commit message style should like:

```
operate(scope): some detail about your operation.
```

here are some operation, and the descreption about when to use it.

* init: build project structure, should appear at the beginner of the project.
* feat: the main feature code, like a new functional thing will be added.
* fix: fix a bug or typo.(if it already has an issue, scope should use the issue id)
* chore: the things may be done for several times, like changing version or update readme.
* refactor: refactor an API or a breaking change.
* tweak: same with refactor but the level is lower than it, like changing the UI or rewrite a function.
