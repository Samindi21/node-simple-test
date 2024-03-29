const User = require('./schema/user');

exports.listUsers = async (req, res) => {
    const users = await User.find();
    console.log(users);
    res.render('index', { users });
}

exports.addUsers = (req, res) => {
    res.render('add'); //view page
}

exports.createNewUser = async (req, res) => { //should user redirect to the homepage. So to stop the process/wait the process we have to make the function asynchronus. so give sync keyword
    const { FirstName, LastName, email } = req.body;
    const newUser = new User({
        FirstName: FirstName,
        LastName: LastName,
        email: email
    })
    console.log(req.body); //check whether the body is coming

    await newUser.save();
    res.redirect('/');

}

exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    //console.log(id);
    await User.findByIdAndDelete(id);
    //res.redirect('/');
    res.status(200).send('Deleted');
}

