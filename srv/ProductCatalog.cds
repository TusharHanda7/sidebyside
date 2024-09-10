using { Customer2 }  from './external/Customer2';

service ProductCatalog {

    entity ProductList as select from Customer2.Material {
        Material,
        Material_Text
    }

}
