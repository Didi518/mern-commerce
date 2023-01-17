const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Merci d'indiquer le nom de l'article"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Merci d'indiquer une description de l'article"],
    },
    price: {
      type: Number,
      required: [true, "Merci d'indiquer le prix de l'article"],
      maxLength: [8, 'Le prix ne doit pas comporter plus de 8 chiffres'],
    },
    rating: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, 'Merci de choisir une catégorie pour cet article'],
    },
    stock: {
      type: Number,
      required: [
        true,
        "Merci d'indiquer combien d'articles sont disponibles en stock",
      ],
      maxLength: [
        5,
        "Le nombre d'articles en stock ne peut pas dépasser 5 caractères",
      ],
      default: 1,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: 'User',
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
