'use strict'

const allCategories = document.querySelector('#categories');
console.log(`Number of categories: ${allCategories.children.length}`);

const categoryItem = document.querySelectorAll('.item');
categoryItem.forEach(item => {
    const title = item.querySelector('h2');
    console.log(`Category: ${title.textContent}`)
    const options = item.querySelectorAll('ul li');
    console.log(`Elements: ${options.length}`)
});
