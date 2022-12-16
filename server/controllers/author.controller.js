const Author = require('../models/author.model');

module.exports.findAllAuthors= (req, res) => {
    Author.find({})
    .then(allAuthors => {
        console.log(allAuthors)
        res.json(allAuthors)
    })
    .catch((err) => {
        console.log(err)
        res.json(err)
    })
}
module.exports.findOneAuthor= (req, res) => {
    Author.findOne({_id: req.params.id})
    .then(oneAuthor => {
        console.log(oneAuthor)
        res.json(oneAuthor)
    })
    .catch((err) => {
        console.log(err)
        res.json(err)
    })
}
module.exports.createAuthor= (req, res) => {
    Author.create(req.body)
    .then(author => {
        console.log(author)
        res.json(author)
    })
    .catch((err) => {
        console.log(err)
        res.status(400).json(err)
    })
}
module.exports.updatedAuthor= (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
    .then(updatedAuthor => {
        console.log(updatedAuthor)
        res.json(updatedAuthor)
    })
    .catch((err) => {
        console.log(err)
        res.status(400).json(err)
    })
}
module.exports.deleteAuthor= (req, res) => {
    Author.findOneAndDelete({_id: req.params.id})
    .then(deleteConfirmation => {
        console.log(deleteConfirmation)
        res.json(deleteConfirmation)
    })
    .catch((err) => {
        console.log(err)
        res.json(err)
    })
}