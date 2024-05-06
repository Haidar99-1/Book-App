type DropDownType = {
    label:string,
    value: string
}


export const dropDownTypes: DropDownType[] = [
    {label: 'Book Search', value: 'book'},
    {label: 'ISBN Search', value: 'ISBN'},
    {label: 'Author Search', value: 'Author'},
    {label: 'NY Best seller Search', value: 'NY Best seller Search'},
]

export type DispatchType = "SET_BOOK_SEARCH" | "SET_ISBN_SEARCH" | "SET_AUTHOR_SEARCH" | "SET_NY_BEST_SELLER_SEARCH" | "SET_SELECTED_VALUE"
export type Action =
    | { type: 'SET_BOOK_SEARCH', payload: string }
    | { type: 'SET_ISBN_SEARCH', payload: string }
    | { type: 'SET_AUTHOR_SEARCH', payload: string }
    | { type: 'SET_NY_BEST_SELLER_SEARCH', payload: string }
    | { type: 'SET_SELECTED_VALUE', payload: string }

export type State = {
    bookSearch: string,
    isbnSearch: string,
    authorSearch: string,
    nyBestSellerSearch: string
    selectedValue: string
}

export const initialState: State = {
    bookSearch: '',
    isbnSearch: '',
    authorSearch: '',
    nyBestSellerSearch: '',
    selectedValue: '',
}


export type Book =
    { 
    age_group: string;
    amazon_product_url: string;
    article_chapter_link: string;
    author: string;
    book_image: string;
    book_image_width: number;
    book_image_height: number;
    book_review_link: string;
    contributor: string;
    contributor_note: string;
    created_date: string;
    description: string;
    first_chapter_link: string;
    price: string;
    primary_isbn10: string;
    primary_isbn13: string;
    publisher: string;
    rank: number;
    rank_last_week: number;
    sunday_review_link: string;
    title: string;
    updated_date: string;
    weeks_on_list: number;
    buy_links: Array<{
        name: string;
        url: string}>
}

export type Response = {
    status: string,
    copyright: string,
    num_results: string,
    results: {
        bestsellers_date: string,
        published_date: string,
        published_date_description: string,
        previous_published_date: string,
        next_published_date: string,
        lists: [
            {
                list_id: number,
                list_name: string,
                list_name_encoded: string,
                display_name: string,
                updated: string,
                list_image: string | null,
                list_image_width: string | null,
                list_image_height: string | null,
                books: Book[]
            }
        ]
    }
}