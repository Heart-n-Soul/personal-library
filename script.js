"use strict";

const myLibrary = [];

const openDialogButton = document.querySelector(".header--btn");

const backdrop = document.querySelector("#backdrop");

const myDialog = document.querySelector(".myDialog");

const closeModalButton = document.querySelector(".btn-close-form");

const addBookButton = document.querySelector(".btn-add-book");

openDialogButton.addEventListener("click", openDialog);

closeModalButton.addEventListener("click", closeModal);

myDialog.addEventListener("close", closeModal);

function closeModal() {
  myDialog.close();
  backdrop.style.display = "none";
}

function openDialog() {
  backdrop.style.display = "block";
  myDialog.showModal();
}

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

const obj = new Book("Kwame", "c.k mann", 23, true);

function addBookToLibrary() {}

console.log(obj);
