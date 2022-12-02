
const CreateUser = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'users',
  });
  User.associate = (models) => {
    User.hasMany(models.BlogPosts, { as: 'blogPosts', foreignKey: 'userId' })
  };
  return User;
};

module.exports = CreateUser;