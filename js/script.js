// Create a new constructor for adding a book
function Book (number, bookName, author, subject, isbnNum, price){
	this.number = bookList.length+1;
	this.bookName = bookName;
	this.author = author;
	this.subject = subject;
	this.isbnNum = isbnNum;
	this.price = price;
}






$(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

});




// Make an empty array to store the informaton for the books
var bookList = [];

// Create a function that takes the book details as parameters and pushes it to the array
function newBook (bookName, author, subject, isbnNum, price){
	var book = new Book (bookName, author, subject, isbnNum, price);
	bookList.push(book);
	newBook.bookRow = addBook (book.number, bookName, author, subject, isbnNum, price);
}

// Create a function that adds table cells and rows to the table and appends it to the page
function addBook (number, bookName, author, subject, isbnNum, price){

	var bookTable = document.createElement('table');
	var bookRow = document.createElement('tr');

	var num = document.createElement('td');
	bookRow.appendChild(num);

	var title = document.createElement('td');
	bookRow.appendChild(title);

	var creator = document.createElement('td');
	bookRow.appendChild(creator);

	var topic = document.createElement('td');
	bookRow.appendChild(topic);

	var tagNumber = document.createElement('td'); 
	tagNumber.setAttribute("class", "tooltip"); // To become an element to hover over for the tooltip
	bookRow.appendChild(tagNumber);

	var tooltip = document.createElement('span'); // To contain the tooltip text
	tagNumber.appendChild(tooltip);

	bookTable.appendChild(bookRow);


	var addTable = document.getElementById('books')
	addTable.appendChild(bookTable);

	num.appendChild(document.createTextNode(number));
	title.appendChild(document.createTextNode(bookName));
	creator.appendChild(document.createTextNode(author));
	topic.appendChild(document.createTextNode(subject));
	tagNumber.appendChild(document.createTextNode(isbnNum));
	tooltip.appendChild(document.createTextNode(price));
	return bookRow;
}


// Use the function to generate a new row to the table with the book information and dynamically add it to the table
newBook("HTML & CSS", "Jon Ducket", "Usability", "ISBN - 1118907442", "Amazon - $11.50");
newBook("The Design Of Everyday Things", "Don Norman", "Usability", "ISBN - 0465050654", "Amazon - $12.92");
newBook("Information Architecture For The Web & Beyond", "Rosenfeld,Morville,Arango", "IA", "ISBN - 1491911689", "Amazon - $27.93");
newBook("The Elements Of User Experience", "James Garrett", "UX Design", "ISBN - 0321683684", "Amazon - $34.06");
newBook("About FACE", "Cooper, Reimann, Cronin, Noessel", "Usability", "ISBN - 1118766571","Amazon - $26.30");



