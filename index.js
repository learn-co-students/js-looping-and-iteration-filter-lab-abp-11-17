function findMatching(collection, name)
{
  const newCollection = [];


  for (const user of collection)
  {
    if (user.toLowerCase() == name.toLowerCase())
      newCollection.push(user);

  }

  return newCollection;
}

function fuzzyMatch(collection, likeName)
{
    const newCollection = [];
    for (const user of collection)
    {
      if (user.lastIndexOf(likeName) === 0)
        newCollection.push(user);
    }
    return newCollection;
}

function matchName(collection, name)
{
  const newCollection = [];
  for (const user of collection)
  {
  if (user.name === name)
    newCollection.push(user)
  }
  return newCollection;
}
