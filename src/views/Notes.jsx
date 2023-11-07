import {Card} from "src/components/molecules/Card/Card.jsx";
import {GridTemplate} from "src/template/GridTemplate.jsx";

export const notes = [
    {
        id: 0,
        title: 'Wake me up when Vue ends',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
    },
    {
        id: 1,
        title: 'Como es An Gular?',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
    },
    {
        id: 2,
        title: 'Du bist Reactish',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '5 days',
    },
    {
        id: 3,
        title: 'Reactuj się kto moze!',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '10 days',
    },
];
export const Notes = () => {
    return (
        <GridTemplate pageType={"notes"}>
            {notes.map(item => (
                <Card id={item.id} cardType={'notes'} created={item.created} title={item.title} content={item.content} key={item.title}/>
            ))}
        </GridTemplate>
    )
}
