module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: { type: DataTypes.STRING, defaultValue: null },
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'users',
    modelName: 'User',
  });
  User.associate = (models) => {
    User.hasMany(models.BlogPost, { foreignKey: 'user_id', as: 'BlogPost' });
  };
  return User;
};