import categories from '../../constants/categories';

const Category = () => {
  return (
    <div className="category">
      {categories.map((item, index) => (
        <div className="box f_flex" key={index}>
          <img src={item.cateImg} alt={item.cateName} />
          <span>{item.cateName}</span>
        </div>
      ))}
    </div>
  );
};

export default Category;
