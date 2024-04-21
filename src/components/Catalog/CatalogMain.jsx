import React, { useState } from 'react';
import './Catalog.css';
import Footer from '../Footer/Footer';

const CatalogMain = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Компьютеры, Ноутбуки, Планшеты', subcategories: ['Планшеты', 'Компьютеры, Неттопы', 'Аксессуары к ноутбукам', 'Моноблоки', 'Ноутбуки', 'Аксессуары к планшетам'] },
    { id: 2, name: 'Серверы и хранение', subcategories: ['Мощные серверы', 'Недорогие серверы', 'Компактные серверы'] },
    { id: 3, name: 'Портативная электроника', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 4, name: 'Оргтехника, переферия', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 5, name: 'Расходные материалы', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 6, name: 'Комплектующие', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 7, name: 'Носители информации', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 8, name: 'Сетевое оборудование', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 9, name: 'Видеонаблюдение, безопасность', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 10, name: 'Телевизоры, фото, видео', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 11, name: 'Web-камеры, наушники, колонки', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 12, name: 'Програмное обеспечение', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 13, name: 'Клавиатуры, мыши, геймпады', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 14, name: 'Аксесуары', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 15, name: 'Бытовая техника', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 16, name: 'Офисная мебель, сейфы', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 17, name: 'Электроинструмент', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 18, name: 'Садовая техника', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 19, name: 'Расходники для инструмента', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 20, name: 'Ручной инструмент', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 21, name: 'Силовая техника', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 22, name: 'Кабели, крепеж', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 23, name: 'Светотехника, батарейки', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 24, name: 'Электрооборудование', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
    { id: 25, name: 'Розетки, выключатели, вилки', subcategories: ['Процессоры', 'Видеокарты', 'Память'] },
  ]);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedCategoryName, setSelectedCategoryName] = useState('Компьютеры, Ноутбуки, Планшеты'); // Название выбранной категории

  const handleCategoryHover = (categoryId, categoryName) => {
    setSelectedCategory(categoryId);
    setSelectedCategoryName(categoryName);
  };

  const handleCategoryLeave = () => {
    // Не изменять selectedCategory и selectedCategoryName при уходе курсора мыши
  };

  const handleSubcategoryClick = (subcategory) => {
    // Перенаправляем пользователя на страницу с товарами данной подкатегории
    window.location.href = `/products`;
  };

  return (
    <>
    <div className="catalog">
      <div className="catalog__container container">
        <div className="popup-catalog">
          <div className="catalog-categories">
            {categories.map(category => (
              <div key={category.id + category.name}
                className="category"
                onMouseEnter={() => handleCategoryHover(category.id, category.name)}
                onMouseLeave={handleCategoryLeave}>
                <span>{category.name}</span>
              </div>
            ))}
          </div>
          {selectedCategory && (
            <>
              <div className="subcategories__container">
                <h3 className="subcategory-title">{selectedCategoryName}</h3>
                <div className="subcategories">
                  {categories.find(category => category.id === selectedCategory).subcategories.map(subcategory => (
                    <>
                      <div key={subcategory} className="subcategory" onClick={() => handleSubcategoryClick(subcategory)}>
                        <span>{subcategory}</span>
                        <div className="brands">
                          {/* Список брендов для каждой подкатегории */}
                          <span>Бренд 1</span>
                          <span>Бренд 2</span>
                          <span>Бренд 3</span>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    <Footer></Footer>
    </div>
    </>
  );
};

export default CatalogMain;