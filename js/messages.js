$(document).ready(begin);
function begin() {
  console.log(socialNetData);
  function getFriends() {
    return socialNetData;
  }
  var dataFriends = getFriends();
  var arrFriends = dataFriends.AMIGOS;
  var $boxFriends = $('.small');

  function showFriends() {
    var str = '';
    for (var i = 0; i < arrFriends.length; i++) {
      var place =
      // '<div class="card mb-2">' +
      //   '<a href="#"> <img class="d-flex mr-3 rounded-circle" src="' + arrFriends[i].photo + '" alt="' + arrFriends[i].name + '"></a>' +
      //   '<div class="card-body d-flex justify-content-between">' +
      //   '<h6 class="card-title mb-1 d-inline">' +
      //   '<a href="#">' + arrFriends[i].name +
      //   '</a></h6></div></div>';

      '<a class="list-group-item list-group-item-action" href="#">' +
      '<div class="media">' +
        '<img class="d-flex mr-3 rounded-circle img-fluid" src="' + arrFriends[i].photo + '" ' + 'alt="' + arrFriends[i].name + '">' +
          '<div class="media-body">' +
            '<strong>' + arrFriends[i].name + '</strong>' +
          '</div>' +
      '</div>' +
    '</a>';

      str += place;
    }
    $boxFriends.html(str);
  }
   function singOff() {
    window.location.href = '../index.html';
  }
  $('.sign-off').click(singOff);

  showFriends();
}

