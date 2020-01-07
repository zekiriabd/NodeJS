# Node.js & Nest.js

#### RedisDictionary

```html
import {RedisDictionary} from "./RedisDictionary";

var customers = new RedisDictionary<number, Customer>("customers");
customers.Add(1, new Customer(1,"Zekiri abdelali"));
customers.Add(2, new Customer(2,"Ali Aloui"));
customers.Add(3, new Customer(3,"Radouf Rahiche"));


customers.findAll().then(x=> console.log(x));  
customers.findById(8).then(x=> console.log(x));  
customers.ContainsKey(1).then(x=> console.log(x)); 
customers.Remove(3).then(x=> console.log(x)); 
customers.Clear();
```

<p align="center">
   <img src="https://i.imgur.com/nqGGIb4.png" alt="badges" style="margin:auto">
</p>


<p>
  https://www.youtube.com/channel/UCIOFNKDimJlBKQ2xp15CbMA?view_as=subscriber
</p>
