function UserPageController(user_repo) {
  this.user_repo = user_repo;
}

UserPageController.prototype.$deps = [ 'user_repo' ];

function UserRepository() { /* … */ }
