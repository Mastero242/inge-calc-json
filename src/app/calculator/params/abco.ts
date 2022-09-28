/**
 *
 * @param FED
 * @param HED
 * @param UNIT
 * @param BCO
 * @param SRDM
 * @param ACCO
 * @param Z0CO
 * @param GTC
 * @returns
 */
export async function ABCO(
  FED: number,
  HED: number,
  KUNIT: number,
  BCO: number,
  SRDM: number,
  ACCO: number,
  Z0CO: number,
  GTC: number
): Promise<number> {
  // console.log(FED); //50
  // console.log(HED); //40
  // console.log(KUNIT); //10000
  // console.log(BCO); //0.3
  // console.log(SRDM); //17.6
  // console.log(ACCO); //0.5
  // console.log(Z0CO); //0.597458
  // console.log(GTC); //0.1

  GTC = +GTC;
  Z0CO = +Z0CO;
  console.log(GTC + Z0CO); // 0.10.597458 ???

  let ftd =
    (((FED * KUNIT) / 1000000) * ACCO) / Z0CO +
    (((HED * KUNIT) / 1000000) * (GTC + Z0CO)) / Z0CO;
  let result = (ftd - (HED * KUNIT) / 1000000) / (BCO * SRDM);

  console.log(ftd);
  console.log(result);
  return result;
}
