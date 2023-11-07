import {Card} from "src/components/molecules/Card/Card.jsx";
import {GridTemplate} from "src/template/GridTemplate.jsx";

export const twitters = [
    {
        id: 0,
        title: 'Hello Roman',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
        twitterName: 'https://static01.nyt.com/images/2020/03/09/sports/09nba-topteams1/09nba-topteams1-mediumSquareAt3X.jpg',
    },
    {
        id: 1,
        title: 'Redux guy',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
        twitterName: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1197736160.jpg?crop=1.00xw:0.667xh;0,0.0420xh&resize=640:*',
    },
    {
        id: 2,
        title: 'React router stuff',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '5 days',
        twitterName: 'https://i.pinimg.com/564x/86/df/72/86df7231309d69a74da6192754e2ddef.jpg',
    },
    {
        id: 3,
        title: 'Super animacje!',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '10 days',
        twitterName: 'https://www.amacad.org/sites/default/files/person/headshots/tom-hanks.jpg',
    },
];
export const Twitters = () => {
    return (
        <GridTemplate pageType={"twitters"}>
            {twitters.map(item => (
                <Card id={item.id} cardType={'twitters'} created={item.created} title={item.title} content={item.content} key={item.title} twitterName={item.twitterName}/>
            ))}
        </GridTemplate>
    )
}
