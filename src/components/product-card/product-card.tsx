import { Link } from 'react-router-dom';
import { Camera } from '../../types/cameras';
import MemoizedPictureImage from '../picture-image/picture-image';
import MemoizedRatingStars from '../rating-stars/rating-stars';
import { AppRoute } from '../../const';

type ProductCardProps = {
  camera: Camera;
};

function ProductCard({camera}: ProductCardProps) {
  const { previewImg, previewImgWebp, name, price, reviewCount, rating, id } = camera;
  const cardURL = `${AppRoute.Product}/${id}`;

  return (
    <div className="product-card">
      <div className="product-card__img">
        <MemoizedPictureImage previewImg={previewImg} previewImgWebp={previewImgWebp} width='280' height='240' alt={name} />
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <MemoizedRatingStars rating={rating} />
          <p className="visually-hidden">Рейтинг: {rating}</p>
          <p className="rate__count">
            <span className="visually-hidden">Всего оценок:</span>
            {reviewCount}
          </p>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>
          {price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">Купить</button>
        <Link className="btn btn--transparent" to={cardURL}>Подробнее</Link>
      </div>
    </div>
  );
}

export default ProductCard;
