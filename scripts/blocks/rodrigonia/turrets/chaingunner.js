let chaingunner = extend(ItemTurret, "chaingunner", {
    setBars(){
        this.super$setBars();
        this.addBar("heat", func(e =>
            new Bar(
                prov(() => Core.bundle.format("bar.heat")),
                prov(() => Pal.lightOrange),
                floatp(() => e.heat)
            )
        ))
    }
});
chaingunner.explosionRadius = 18;
chaingunner.explosionDamage = 10000;
chaingunner.buildType = () => extend(ItemTurret.ItemTurretBuild, chaingunner, {
    update(){
        /*
        for (let i=0; i<Groups.bullet.size(); i++){
            if(Groups.bullet.index(i).owner == this){
                this.heat += 0.005
            }
        }
        */
        if(this.heat > 0.999){
            this.kill();
        }
        this.super$update();
    }
})