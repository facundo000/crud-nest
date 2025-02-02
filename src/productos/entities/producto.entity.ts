import { join } from "path";
import { Marca } from "src/marcas/entities/marca.entity";
import { ProductosProveedore } from "src/productos_proveedores/entities/productos_proveedore.entity";
import { Rubro } from "src/rubros/entities/rubro.entity";
import { Column, Entity, JoinColumn, ManyToOne, NumericType, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Producto {
    @PrimaryGeneratedColumn('uuid')
    cod_product: string;

    @Column('text', { nullable: true})
    description: string

    @ManyToOne(
        () => Marca,
        (Marca) => Marca.products,
        {onDelete:'CASCADE'}
    )
    @JoinColumn({ name: "id_brand" })
    id_brand: Marca;

    @ManyToOne(
        () => Rubro,
        (Rubro) => Rubro.products
    )
    @JoinColumn({ name: "id_category" })
    id_category: Rubro

    @OneToMany(
        () => ProductosProveedore,
        (ProductosProveedore) => ProductosProveedore.id_products,
        { cascade: true }
    )
    products_suppliers: ProductosProveedore

    @Column('money', {
        default: 0, nullable: false
    })    
    price: NumericType;
}
