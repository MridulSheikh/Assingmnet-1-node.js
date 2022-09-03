function find_random(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

module.exports = find_random;