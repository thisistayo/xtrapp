<template>
    <div class="archive">
        <div class="grid">
            <div v-for="image in images" :key="image.id" class="grid-item">
                <img :src="image.src" alt="archive image" class="archive-image">
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'TheArchive',
    data() {
        return {
            images: [
                { id: 1, src: require('../assets/img/md.jpg') },
                { id: 2, src: require('../assets/img/md.jpg') },
                { id: 3, src: require('../assets/img/md.jpg') },
                { id: 4, src: require('../assets/img/md.jpg') },
                { id: 5, src: require('../assets/img/md.jpg') },
                { id: 6, src: require('../assets/img/md.jpg') },

            ]
        };
    }
};
</script>
  
<style scoped>
.archive {
    padding: 5px 5px; /* Adjust padding as needed */
    display: flex;
    justify-content: center; /* Center the grid horizontally */}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
}

.grid-item {
    border-radius: 5px;
}

.archive-image {
    width: 300px;
    /* Set the width of the images */
    height: 300px;
    /* Set the height of the images */
    object-fit: cover;
    /* Maintain aspect ratio while filling the container */
    border-radius: 50%;
}
</style>
  