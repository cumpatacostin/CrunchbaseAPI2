var express = require("express");
var Sequelize = require("sequelize");
var cors = require('cors');


//connect to mysql database
var sequelize = new Sequelize('crunchbase', 'root', '', {
    dialect:'mysql',
    operatorsAliases: false,
    host:'localhost',
    storage: './sql/crunchbasedb.db'
})

sequelize.authenticate().then(function(){
    console.log('Success')
})


var Organizations = sequelize.define('organizations', {
    name: Sequelize.STRING,
    description: Sequelize.STRING
})

var Founders = sequelize.define('founders', {
    organization_id: Sequelize.INTEGER,
    name: Sequelize.STRING,
    bio: Sequelize.STRING,
    age: Sequelize.INTEGER

})


Founders.belongsTo(Organizations, {foreignKey: 'organization_id', targetKey: 'id'})

var app = express();

app.use(express.json());       // to support JSON-encoded bodies
app.use(cors());

// get a list of organizations
app.get('/organizations', function(request, response) {
    Organizations.findAll().then(function(organization){
        response.status(200).send(organization)
    })
        
})

app.get('/founders', function(request, response) {
    Founders.findAll().then(function(founder){
        response.status(200).send(founder)
    })
        
})

// get one organization by id
app.get('/organizations/:id', function(request, response) {
    Organizations.findOne({where: {id:request.params.id}}).then(function(organization) {
        if(organization) {
            response.status(200).send(organization)
        } else {
            response.status(404).send()
        }
    })
})
app.post('/organizations', function(request, response) {
    Organizations.create(request.body).then(function(organization) {
        response.status(201).send(organization)
    })
})

app.put('/organizations/:name', function(request, response) {
    Organizations.findById(request.params.name).then(function(organization) {
        if(organization) {
            organization.update(request.body).then(function(organization){
                response.status(201).send(organization)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

app.delete('/organizations/:id', function(request, response) {
    Organizations.findById(request.params.id).then(function(organization) {
        if(organization) {
            organization.destroy().then(function(){
                response.status(204).send('Done')
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})


app.get('/founders/:name', function(request, response) {
    Founders.findOne({where: {name:request.params.name}}).then(function(founder) {
        if(founder){
            response.status(200).send(founder)
        } else {
            response.status(404).send()
        }
    })
})

app.delete('/founders/:id', function(request, response) {
        Founders.findById(request.params.id).then(function(founder) {
        if(founder) {
            founder.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

app.get('/organizations/:id/founders', function(request, response) {
    Founders.findAll({where:{organization_id: request.params.id}}).then(
            function(founders) {
                response.status(200).send(founders)
            }
        )
})

app.listen(8081, '0.0.0.0');