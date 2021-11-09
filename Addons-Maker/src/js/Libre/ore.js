const rp = require('../RP/RP'),
  bp = require('../BP/BP'),
  bpv = require('../BP/var BP');

const { is_ingot, blocks, name, id} = require('../../../data/ore.json'),
      { ore, block } = blocks
var text = '';

//El bp.block es para crear el comportamiento
//Se acomoda como ( id, name, tag, tiempo_de_destruccion, color(hexadecimal), nivel_de_pico, es_piedra, tipo, si_es_piedra_que_suelta, minimo_y_maximo_de_lo_anterior, es_mesa, tag_de_la_mesa)
//Por defecto viene (`${id}`, `${name}_ore`, 'stone', 10, ore.color, ore.pickaxe, true, 'ore', name, ore.item)

//El rp.textureB es para crear la textura
//Se acomoda como ( bloque1.png, bloque2.png)
//Por defecto viene (`ore.png`,`${name}_ore.png`)

//El rp.run_blocks es para crear la textura
//Se acomoda como ( id, nombre, sonido, es_mesa, subcarpeta(como deepslate))
//Por defecto viene (id, `${name}_ore`, 'stone');
if( is_ingot == true ){
  rp.run_blocks(id, `${name}_ore`, 'stone');
  rp.textureB(`ore.png`,`${name}_ore.png`)
  text += `[RP] ${name}_ore\n`;
  
  bp.block(`${id}`, `${name}_ore`, 'stone', 10, ore.color, ore.pickaxe, true, 'ore', `raw_${name}`, ore.item);
  text += `[BP] ${name}_ore\n`;
  
  bpv.Feature(id, name, ore.feature.y.min, ore.feature.y.max, ore.feature.ores, ore.feature.iterations)
}else{
  rp.run_blocks(id, `${name}_ore`, 'stone');
  rp.textureB(`ore.png`,`${name}_ore.png`)
  text += `[RP] ${name}_ore\n`;
  
  bp.block(`${id}`, `${name}_ore`, 'stone', 10, ore.color, ore.pickaxe, true, name, ore.item);
  text += `[BP] ${name}_ore\n`;
  bpv.Feature(id, name, ore.feature.y.min, ore.feature.y.max, ore.feature.ores, ore.feature.iterations)
}
console.log(text)