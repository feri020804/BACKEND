<?php
class Animal
{
    public array $animal = [
        'ayam',
        'kucing',
        'burung',
        'ikan',
        'semut'
    ];

    public function __construct($data)
    {
        $this->animal = $data;
    }

    public function index()
    {
        // foreach ($this->animal as $i => $hewan) {
        //     echo $i . ': ' . $hewan . PHP_EOL;
        // }

        for ($i = 0; $i < count($this->animal); $i++) {
            echo $this->animal[$i] . PHP_EOL;
        }
    }

    public function store($data)
    {
        $this->animal[] = $data;
        echo 'hewan baru ditambahkan' . $data . PHP_EOL;
    }

    public function update($index, $data)
    {
        if ($this->animal[$index]) {
            $this->animal[$index] = $data;
            echo 'Index ' . $index . ' berhasil diubah menjadi ' . $data . PHP_EOL;
        } else {
            echo 'index' . $index . ' tidak ditemukan.' . PHP_EOL;
        }
    }

    public function destroy($index)
    {
        if ($this->animal[$index]) {
            echo 'index ' . $index . ' berhasil di hapus ' . $this->animal[$index] . PHP_EOL;
            array_splice($this->animal, $index, 1);
        } else {
            echo 'index ' . $index . ' tidak ditemukan' . PHP_EOL;
        }
    }
}

$animal = new Animal(['ayam', 'ikan']);

echo 'index - Menampilkan seluruh hewan' . PHP_EOL;
$animal->index();

echo 'store - Menambahakan hewan baru (burung)' . PHP_EOL;
$animal->store('burung');
$animal->index();
echo PHP_EOL;

echo 'Update - Mengupdate hewan' . PHP_EOL;
$animal->update(0, 'kucing anggora');
$animal->index();
echo PHP_EOL;

echo 'Destroy - Menghapus hewan' . PHP_EOL;
$animal->destroy(1);
$animal->index();
echo PHP_EOL;
