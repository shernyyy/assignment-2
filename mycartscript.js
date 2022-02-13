if (document.readyState == 'loading')
{
    document.addEventListener('DOMContentLoaded',ready)
}

else
{
    ready()
}

function ready()
{
    var removeclothesbtn = document.getElementsByClassName('removebutton')
    for(var i = 0; i < removeclothesbtn.length; i++)
    {
        var button = removeclothesbtn[i]
        button.addEventListener('click',removalofclothes) 
    }

    var numberinput = doucment.getElementsByClassName('number-input')
    for(var i = 0; i < numberinput.length; i++)
    {
        var input = numberinput[i]
        input.addEventListener('change',changeinamount)
    }

    var addtocart = document.getElementsByClassName('button1')
    for(var i = 0; i < addtocart.length; i++)
    {
        var button = addtocart[i]
        button.addEventListener('click',afteradding)
    }

    document.getElementsByClassName('purchasebutton')[0].addEventListener('click', afterpurchase)
}

function afterpurchase()
{
    alert('Thank you for shopping with us. Please come by again!')
    var objects = document.getElementsByClassName('clothes')[0]
    while (objects.hasChildNodes())
    {
        objects.removeChild(objects.firstChild)
    }
    totalupdate()
}

function removalofclothes(event)
{
    var afterclicking = event.target
    afterclicking.parentElement.parentElement.remove()
    totalupdate()
}

function changeinamount(event)
{
    var input = event.target
    if(isNaN(input.value) || input.value <= 0)
    {
        input.value = 1
    }
    totalupdate()
}

function afteradding(event)
{
    var button = event.target
    var theclothes = button.parentElement.parentElement
    var name = theclothes.getElementsByClassName('clothesname')[0].innerText
    var price = theclothes.getElementsByClassName('price')[0].innerText
    var image = theclothes.getElementsByClassName('shirt')[0].src
    addingclothes(name,price,image)
    totalupdate()
}

function addingclothes(name,price,image)
{
    var therow = document.createElement('div')
    therow.classList.add('row')
    var things = document.getElementsByClassName('clothes')[0]
    var objectname = things.getElementsByClassName('clothes-name')
    for(var i = 0; i < objectname.length; i++)
    {
        if(objectname[i].innerText == name)
        {
            alert('This item is already added to the cart')
            return
        }
    }
    var contentsbyrow = `
        <div class = "clothes1 col">
            <img class = "clothes-image" src="${imageSrc}" width="100"
            height="100">
            <span class="clothes-name">${name}</span>
        </div>
        <span class="price col>${price}</span>
        <div class="number col>
            <input class = "number-input" type="number" value="1">
            <button class = "button removebutton" type="button">REMOVE</button>
        </div>`
    therow.innerHTML = contentsbyrow  
    things.append(therow)
    therow.getElementsByClassName('removebutton')[0].addEventListener('click',removalofclothes)
    therow.getElementsByClassName('number-input')[0].addEventListener('change'.changeinamount)
}


function totalupdate()
{
    var objectbox = document.getElementsByClassName('clothes')[0]
    var therows = objectbox.getElementsByClassName('row')
    var total = 0
    for (var i = 0; i < therows.length; i++)
    {
        var thatrow = therows[i]
        var theprice = thatrow.getElementsByClassName('price')[0]
        var quantityElement = thatrow.getElementsByClassName('number-input')[0]
        var price = parseFloat(theprice.innerText.replace('$',''))
        var amount = quantityElement.value
        total = total + (price * amount)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('total-clothes-price')[0].innerText = '$' + total
}