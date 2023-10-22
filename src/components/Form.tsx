import React from 'react';
import '../style/css/Form.css';

interface FormProps {
  handler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  selector: string
  setSelector: React.Dispatch<React.SetStateAction<string>>;
}

//Для обращения по строке необходимо задать типы итератору и значению (Словарь)
const labels: {[propName: string]: string} = {  
  none: '',
  userId: 'id пользователя',
  id: 'id поста',
  title: 'Название поста',
  body: 'Содержание поста',
}

export default function Form({handler, value, setSelector, selector, setValue}: FormProps) {
  return (
    <form className='form'>
        <select 
          id="label" 
          className='form__select'
          value={selector}
          onChange={(e) => setSelector(e.currentTarget.value)}
        >
          <option value="none">Без фильтров</option>
          <option value="userId">Поиск по номеру пользователя</option>
          <option value="id">Поиск по номеру поста</option>
          <option value="title">Поиск по названию поста</option>
          <option value="body">Поиск по содержанию поста</option>
        </select>
        <div className="form__label">{labels[selector]}</div>
        <input 
          type="text" 
          className="form__input"
          value={value} 
          onChange={(e) => {setValue(e.target.value)}}

        />
        <button
          className='form__btn'
          onClick={handler}
        >Загрузить список постов</button>
      </form>
  )
}
