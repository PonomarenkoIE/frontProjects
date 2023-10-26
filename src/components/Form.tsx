import React from 'react';
import '../style/css/Form.css';

interface FormProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
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

export default function Form({setShow, value, setSelector, selector, setValue}: FormProps) {
  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelector(e.currentTarget.value)
    setValue('')
  }
  
  return (
    <form className='form'>
        <select 
          id="label" 
          className='form__select'
          value={selector}
          onChange={changeHandler}
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
          onClick={(e) => {
            e.preventDefault()
            setShow(true)
          }}
        >Загрузить список постов</button>
      </form>
  )
}
