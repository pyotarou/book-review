import { Box, Button, Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react'
import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { url } from '../../../const'
import { Book } from '../../../types/Book'
import BookCard from './BookCard'

type Props = {
  books: Book[]
}

const Books: FC<Props> = (props) => {
  const { books } = props

  return (
    <>
      <>
        {books === null ? (
          <Center h="100vh">
            <Spinner color="black" />
          </Center>
        ) : (
          books.map((book) => (
            <WrapItem mx="auto" key={book.id}>
              <BookCard
                id={book.id}
                title={book.title}
                url={book.url}
                review={book.review}
                reviewer={book.reviewer}
                key={book.id}
                isMine={book.isMine}
              />
            </WrapItem>
          ))
        )}
      </>
    </>
  )
}

export default Books
