
const CreateUser = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'users',
  });
  User.associate = (models) => {
    User.hasMany(models.BlogPost, { as: 'blogPost', foreignKey: 'userId' })
  };
  return User;
};

module.exports = CreateUser;