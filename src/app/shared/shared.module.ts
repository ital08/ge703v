// import { ArticuloModalContent } from './../areas/almacen/mantenimientos/articulo/articulo.modal.content';
// import { MaterialModule } from './../areas/areas-shared/materialAngular/material.module';
// import { ListInfoModalContent } from './../areas/areas-shared/modals/list-info.modal.content';
// import { OneInfoModalContent } from 'app/areas/areas-shared/modals/one-info.modal.content';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedService } from './shared.service';// import { NumeroDecimalPipe } from '../areas/areas-shared/helpers/numero-decimal.pipe';
import { MaterialComponentModule } from './components/material-component.module';
// import { NumeroDecimalFormatterDirective } from '../areas/areas-shared/helpers/numero-decimal-formatter.directive';
// import { ConfirmDeleteModalContent } from '../areas/areas-shared/modals/confirm-delete.modal.content';
// import { DocumentoVisualizadorModalContent } from 'app/areas/areas-shared/documento-visulizador/documento-visualizador.modal.content';
// import { AngularDualListBoxModule } from 'angular-dual-listbox';
// import { MenuService } from 'app/areas/areas-shared/menu/menu.service';
// import { EstadoCivilService } from 'app/areas/areas-shared/estadoCivil/estado-civil.service';
// import { SerieLocalService } from 'app/areas/ventas/mantenimientos/serie-local/serie-local.service';
// import { MonedaService } from 'app/areas/areas-shared/moneda/moneda.service';
// import { PlanCtaVentaService } from 'app/areas/ventas/mantenimientos/plan-cta-venta/plan-cta-venta.service';
// import { TipoUnidadService } from 'app/areas/areas-shared/tipoUnidad/tipoUnidad.service';
// import { TipoAfectacionService } from 'app/areas/areas-shared/tipoAfectacion/tipoAfectacion.service';
// import { MesaService } from 'app/areas/ventas/mantenimientos/mesa/mesa.service';
// import { VendedorService } from 'app/areas/ventas/mantenimientos/vendedor/vendedor.service';
// import { MonedaRelacionService } from 'app/areas/areas-shared/monedaRelacion/monedaRelacion.service';
// import { TipoNotaCDService } from 'app/areas/areas-shared/tipoNotaCD/tipoNotaCD.service';
// import { LocalParametroService } from 'app/security/local/local-parametro.service';
// import { TipoItemService } from 'app/areas/areas-shared/tipoItem/tipoItem.service';
// import { LocalService } from 'app/security/local/local.service';
// import { AnulacionMotivoService } from 'app/areas/areas-shared/anulacionMotivo/anulacion-motivo.service';
// import { SerieLocalAlmacenService } from 'app/areas/almacen/mantenimientos/serie-local-almacen/serie-local-almacen.service';
// import { CoreModule } from 'app/core';
// import { NivelPrimeroService } from 'app/areas/almacen/mantenimientos/niveles/nivel-primero.service';
// import { NivelSegundoService } from 'app/areas/almacen/mantenimientos/niveles/nivel-segundo.service';
// import { NivelTerceroService } from 'app/areas/almacen/mantenimientos/niveles/nivel-tercero.service';
// import { SunatService } from 'app/areas/areas-shared/sunat/sunat.service';
// import { PlanCtaCompraService } from 'app/areas/compras/mantenimientos/plan-cta-compra/plan-cta-compra.service';
// import { AlmacenesService } from 'app/areas/almacen/mantenimientos/almacenes/almacenes.service';
// import { TipoAduanaService } from 'app/areas/areas-shared/tipoAduana/tipoAduana.service';
// import { TipoComprobanteAlmacenEmpresaService } from 'app/areas/almacen/mantenimientos/tipoComprobanteAlmacenEmpresa/tipoComprobanteAlmacenEmpresa.service';
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// import { TipoComprobanteCompraEmpresaService } from 'app/areas/compras/mantenimientos/tipoComprobanteCompraEmpresa/tipoComprobanteCompraEmpresa.service';
// import { FormaPagoService } from 'app/areas/areas-shared/formaPago/formaPago.service';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule,
      //, NgbModule, MaterialModule, AngularDualListBoxModule, CoreModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialComponentModule
        // NgbModule,
        // NumeroDecimalPipe,
        // AngularDualListBoxModule,
        // MaterialModule
    ],
    declarations: [
        // NumeroDecimalPipe,
        // NumeroDecimalFormatterDirective,
        // ConfirmDeleteModalContent,
        // OneInfoModalContent,
        // ListInfoModalContent,
        // DocumentoVisualizadorModalContent,
        // ArticuloModalContent
    ],
    entryComponents: [
        // ConfirmDeleteModalContent,
        // OneInfoModalContent,
        // ListInfoModalContent,
        // DocumentoVisualizadorModalContent,
        // ArticuloModalContent
    ],
    providers: [
        SharedService,
        // MenuService,
        // EstadoCivilService,
        // SerieLocalService,
        // MonedaService,
        // PlanCtaVentaService,
        // TipoUnidadService,
        // TipoAfectacionService,
        // MesaService,
        // VendedorService,
        // MonedaRelacionService,
        // TipoNotaCDService,
        // LocalParametroService,
        // TipoItemService,
        // LocalService,
        // AnulacionMotivoService,
        // SerieLocalAlmacenService,
        // NivelPrimeroService,
        // NivelSegundoService,
        // NivelTerceroService,
        // SunatService,
        // PlanCtaCompraService,
        // AlmacenesService,
        // TipoAduanaService,
        // TipoComprobanteAlmacenEmpresaService,
        // SweetAlert2Module,
        // TipoComprobanteCompraEmpresaService,
        // FormaPagoService
    ],
})
export class SharedModule { }
