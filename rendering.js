import {
  comments,
  initLikeButtonListener,
  editClick,
  saveEditComment,
  dateFormat,
} from "./api.js";

const commentList = document.querySelector(".comments");

export const renderComments = () => {
  const commentsHtml = comments
    .map((comment, index) => {
      return `<li class='comment'>
    <div class='comment-header'>
      <div>${comment.name}</div>
      <div>${dateFormat(new Date(comment.date))}
        </div>
      </div>
      <div class='comment-body'>
        <div class= 'comment-text'
        data-index="${index}"
        > ${comment.text} </div>
        </div>
        <div class='comment-footer'>
        <div class='likes'>
        <span class= 'likes-counter'> ${comment.likes}
          </div>
        <button class='like-button ${
          comment.isLiked ? "-active-like" : ""
        }' data-index="${index}"></button>
        </div>
        <div class='edit-container'>
          <button class='edit-button ${
            comment.edit ? "" : "edit-click"
          }' data-index="${index}">Изменить комментарий</button>
        </div>

    </li>`;
    })
    .join("");

  const appHtml = `
  <div class="container">
  <h3>Форма входа</h3>
  <div class="autorization">
    <input type="text" class="form login-input" placeholder="Login" />
    <input type="text" class="form password-input" placeholder="Password" />
    <button class="login-button">Войти</button>
  </div>

  <div class="loader">Комментарии загружаются</div>
  <ul class="comments">
    <!--список рендерится из js -->
    ${commentsHtml}
  </ul>
  <div class="add-form">
    <input
      type="text"
      class="form add-form-name"
      placeholder="Введите ваше имя"
    />
    <textarea
      type="textarea"
      class="form add-form-text"
      placeholder="Введите ваш коментарий"
      rows="4"
    ></textarea>
    <div class="add-form-row">
      <button class="add-form-button">Написать</button>
    </div>
  </div>
  <div class="add-comment-tittle">Комментарий добавляется</div>
</div>`;

  commentList.innerHTML = commentsHtml;
  // initLikeButtonListener();
  // editClick();
};
