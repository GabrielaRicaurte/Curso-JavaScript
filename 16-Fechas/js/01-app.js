/* 
    ==========================
    ==== EL OBJETO DATE() ====
    ==========================
*/

const diaHoy = new Date();

let valor;

valor = diaHoy;

valor = diaHoy.getFullYear(); /* Retorna el año actual */
valor = diaHoy.getMonth(); /* Retorna el mes actual, getMonth() incia en 0, 0 - Enero, 1 - Febrero.... */ 
valor = diaHoy.getMinutes(); /* Retorna el minuto actual */
valor = diaHoy.getHours(); /* Retorna la hora actual */

/* GET FUNCIONA PARA RETORNAR EL VALOR Y SET FUNCIONA PARA EDITAR EL OBJETO DE FECHAS */

valor = diaHoy.setFullYear(2010);

valor = fecha.toLocaleString(); /* 7/2/2023, 4:44:33 p.m */
valor = fecha.toLocaleTimeString(); /* 4:45:23 p.m */
valor = fecha.toLocaleDateString(); /* 7/2/2023 */


console.log(diaHoy)