export type AuthorNameResponse = {
    title: string; //need
    authors: string[]; //need
    description: string; // need
    industryIdentifiers: Array<{
        type: string;
        identifier: string;
    }>;
    imageLinks: {
        smallThumbnail: string;
        thumbnail: string; // need
    };
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string; // need

}
export type Response = {
    items: Array<{
        kind: string;
        id: string;
        etag: string;
        selfLink: string;
        volumeInfo: {
            title: string;
            subtitle?: string;
            authors: string[];
            publisher: string;
            publishedDate: string;
            description: string;
            industryIdentifiers: Array<{
                type: string;
                identifier: string;
            }>;
            readingModes: {
                text: boolean;
                image: boolean;
            };
            pageCount: number;
            printType: string;
            categories: string[];
            maturityRating: string;
            allowAnonLogging: boolean;
            contentVersion: string;
            panelizationSummary: {
                containsEpubBubbles: boolean;
                containsImageBubbles: boolean;
            };
            imageLinks: {
                smallThumbnail: string;
                thumbnail: string;
            };
            language: string;
            previewLink: string;
            infoLink: string;
            canonicalVolumeLink: string;
        };
    }>;
}

type VolumneInfo = {
        title: string; //need
        authors: string[]; //need
        description: string; // need
        industryIdentifiers: Array<{
            type: string;
            identifier: string;
        }>;
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string; // need
        };
        previewLink: string;
        infoLink: string;
        canonicalVolumeLink: string; // need
    };
