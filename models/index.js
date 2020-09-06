const Post = require('./Post');
const Company = require('./Company');

//Associations

Post.belongsTo(Company,{
    foreignKey: 'company_id',
    onDelete: 'CASCADE'
});