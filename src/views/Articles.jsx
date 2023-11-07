import {Card} from "src/components/molecules/Card/Card.jsx";
import {GridTemplate} from "src/template/GridTemplate.jsx";

const articles = [
    {
        id: 1,
        title: 'React on my mind',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/helloroman',
        created: '1 day',
    },
    {
        id: 2,
        title: 'Wish you React',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/helloroman',
        created: '1 day',
    },
    {
        id: 3,
        title: 'You gave React a bad name',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/helloroman',
        created: '5 days',
    },
    {
        id: 4,
        title: 'Is it React you looking for?',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        articleUrl: 'https://youtube.com/helloroman',
        created: '10 days',
    },
];
export const Articles = () => {
    return (
        <GridTemplate pageType={"articles"}>
            {articles.map(item => (
                <Card id={item.id} cardType={'articles'} created={item.created} title={item.title} content={item.content} key={item.title} articleUrl={item.articleUrl}/>
            ))}
        </GridTemplate>
    )
}
