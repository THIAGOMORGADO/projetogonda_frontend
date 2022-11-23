import React from 'react';
import { Route, Routes } from 'react-router-dom'

import { HomePage } from './screens/Home'
import { Autenticacao } from './screens/Login'
import { BooksPage } from './screens/Books';
import { BookPage } from './screens/Book';
import { AddBookPage } from './screens/AddBook';
import { AboutPage } from './screens/About';
import { CorreraGondaPage } from './screens/CorreraGonda';
import { ContactPage } from './screens/Contact';
//import { ErrorPage } from './screens/Error';

export function AppRoutes() {
  return (
    <div className='App'>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route  path="/autenticacao" element={<Autenticacao/>} />
        <Route  path="/about" element={<AboutPage />} />
        <Route  path="/correragonda" element={<CorreraGondaPage />} />
        <Route  path="/addbook" element={<AddBookPage />} />
        <Route  path="/livros" element={<BooksPage />} />
        <Route  path="/livros/:id" element={<BookPage />} />        
        <Route  path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}
