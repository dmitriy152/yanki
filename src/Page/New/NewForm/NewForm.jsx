import React from "react";


function NewForm() {
  return (
    <form className="new__form">
        <h2 className="new__form__title">Узнайте  первым о новинках</h2>
        <input className="new__form__e-mail" type="text" placeholder="Ваш e-mail*"/>
        <input className="new__form__submit" type="submit" value="ПОДПИСАТЬСЯ" />
        <span className="new__form__subtitle">
          Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с условиями конфиденциальности.
        </span>
    </form>
  );
}

export default NewForm;
