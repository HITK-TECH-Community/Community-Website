//Controller function for home page route
const home = (req,res)=>{
    console.log(req.url);
    res.send('<p>Home Page of HIT-K Tech Community</p>');
}
//Controller function for resource page route
const resource_index = (req,res)=>{
    console.log(req.url);
    res.send('<p>All resources in HIT-K Tech Community will be shown here.</p>');
}
//Controller function for route to page that does not exist
const error = (req,res)=>{
    console.log('Error');
    res.status(404).send('<p>404 Page Not Found</p>');
}

module.exports = {home , resource_index,error};