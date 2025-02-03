const { DataTypes } = require('sequelize');
const { sequelize } = require('../Config/db');

const Course = sequelize?.define(
  'Course',
  {
    course_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    course_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users', // References the 'users' table
        key: 'user_id', // References the 'user_id' field in the 'users' table
      },
    },
    pdf_location: {
      type: DataTypes.STRING,
      allowNull: true, // Can be null if not provided
    },
    blob_location: {
      type: DataTypes.STRING,
      allowNull: true, // Can be null if not provided
    },
    cover_location: {
      type: DataTypes.STRING,
      allowNull: true, // Can be null if not provided
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'free', // e.g., 'free', 'premium'
    },
    quiz_location: {
      type: DataTypes.STRING,
      allowNull: true, // Can be null if not provided
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
    tableName: 'courses', // Explicitly set the table name
  }
);

module.exports = Course;