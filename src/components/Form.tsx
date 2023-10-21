import React, { useState } from 'react';
import '../style/css/Form.css';

interface FormProps {
  handler: (e: React.MouseEvent<HTMLButtonElement>) => void
}

//Для обращения по строке необходимо задать типы итератору и значению (Словарь)
const labels: {[propName: string]: string} = {  
  userId: 'id пользователя',
  id: 'id поста',
  title: 'Название поста',
  body: 'Содержание поста',
}

export default function Form({handler}: FormProps) {
  const [labelKey, setLabelKey] = useState('id')

  return (
    <form className='form'>
        <select 
          id="label" 
          className='form__select'
          value="id"
          onChange={(e) => setLabelKey(e.currentTarget.value)}
        >
          <option value="userId">Поиск по номеру пользователя</option>
          <option value="id">Поиск по номеру поста</option>
          <option value="title">Поиск по названию поста</option>
          <option value="Содержание поста">Поиск по содержанию поста</option>
        </select>
        <div className="form__label">{labels[labelKey]}</div>
        <input 
          type="text" 
          className="form__input" 
        />
        <button
          className='form__btn'
          onClick={handler}
        >Загрузить список постов</button>
      </form>
  )
}
