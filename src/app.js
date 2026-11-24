import express, {json} from 'express';
import cors from 'cors';

const app= express();
app.use(cors());
app.use(express.json());

const libros={
    'Hansel y Gretel':{
        autor: "Hermanos Grimm",
        argument: "Dos hermanos que son abandonados en el bosque por sus padres debido a la pobreza y logran vencer a una malvada bruja gracias a su ingenio.",
        publication: "20/12/1812"
    },
    'Don Quijote de la Mancha':{
        autor: "Miguel de Cervantes",
        argument: "La novela narra las aventuras de Alonso Quijano, un hidalgo pobre de La Mancha de unos cincuenta años que, de tanto leer novelas de caballería, pierde el juicio.",
        publication: "16/01/1605"
    },
    'Lazarillo de Tormes':{
        autor: "Anónimo",
        argument: "Es una novela anónima española del Siglo de Oro que narra la vida de Lázaro, un joven de origen muy humilde que debe ingeniárselas para sobrevivir en una sociedad dura, hipócrita y hambrienta",
        publication: "1554"
    }
};
app.get('/libros', (req, res) =>{
    return res.json(libros);
});

app.get('/libros/:libro', (req, res) =>{
    const libro= req.params.libro;
    return res.json(libros[libro]);

    if (libros[name] === undefined) {
        return res.status(404).json({
            error: 'No se ha podido encontrar el libro'
        });
    }
});


app.post('/libros', (req,res)=> {
    const name= req.body.name;
    const autor = req.body.autor;
    const argument =req.body.argument;
    const publication=req.body.publication;

    libros[name] = {
        autor:autor,
        argument:argument,
        publication:publication
    };
    return res.status(201),json(libros[name]);
})

app.delete('/libros/:libro', (req, res) =>{
    const name =req.params.libro;
    if (libros[name] == undefinied){
        res.status(404).json({
            error:'No se ha podido encontrar el libro'
        });
    }
    delete libros[name];

    return res.status(204).end();
});

app.put('/libros/:libro', (req,res)=> {
    const name =req.params.libro;
    const autor= req.body.autor;
    const argument = req.body.argument;
    const publication=req.body.publication;

    libros[name] = {
        autor:autor,
        argument:argument,
        publication:publication
    };
    return res.status(200),json(libros[name]);
});

app.listen(8080, () => {
    console.log('Iniciando el backend en el puerto 8080');
});

