function autoTempa(jumlahTempa){
    let level = 0
    let PeluangTidakBerhasil = 1
    for(let i=0; i < jumlahTempa; i++){
            let tempa = Math.random() * 10
            let x = Math.floor(tempa);
            if (x < PeluangTidakBerhasil){
                if (level == 0){
                    console.log('(chance ' + x + '0%) Gagal, pedang anda sekarang +' + level)
                }
                else if (level >=3 && level <=5 ){
                    level = 3
                    PeluangTidakBerhasil = 4
                    console.log('(chance ' + x + '0%) Gagal, pedang anda sekarang +' + level)
                }
                else if (level == 6){
                    level = 0
                    PeluangTidakBerhasil = 1
                    console.log('(chance ' + x +'0%) UPGRADE GAGAL, SENJATA TELAH HANCUR')
                }

                else{
                    level -= 1
                    PeluangTidakBerhasil -= 1
                    console.log('(chance ' + x + '0%) Gagal, pedang anda sekarang +' + level)
                }
            }
            else{
                if (level == 7){
                    console.log('(chance ' + x + '0%) SUKSES, SELAMAT SENJATA ANDA SUDAH MAKSIMAL +7')
                }
                else{
                    level += 1
                    PeluangTidakBerhasil += 1
                    console.log('(chance ' + x + '0%) SUKSES, pedang anda sekarang +' + level)
                }
            }
            console.log('TEMPA kE-' + i)
        }
    }
    (autoTempa(10));