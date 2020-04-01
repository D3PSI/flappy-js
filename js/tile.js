

class Tile {
    constructor(_index, isVisible = true) {
		this.m_isVisible = isVisible;
        this.m_index = _index;
        this.m_width = width / 4;
		this.m_height = random(200,height - 300 - 200);
		this.m_offset = this.m_index * this.m_width;
		
    }

    get_index() {
        return this.m_index;
    }
	
	get_outofbounds() {
		if(this.m_offset + this.m_width < 0){
			return true;
		}else{
			return false;
		}
    }

    update() {
        this.m_offset -= SPEED;
    }

    draw() {
		fill(0);
        stroke(5);
		if(this.m_isVisible == false){
			
		}else{
			rect(this.m_offset,0 ,this.m_width - 200, this.m_height);
			rect(this.m_offset,height - (height - this.m_height- 300) ,this.m_width -200,height - this.m_height - 300);
		}
    }
}